import { useCallback } from "react";
import { Toaster, toast } from "sonner";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import useYupValidationResolver from "@app/hooks/useYupValidation";
import Spinner from "./spinner";

const inputClass = "pl-2 py-1 text-black resize-none rounded";

type Params = {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
};

const INITIAL: Params = {
  email: "",
  mensaje: "",
  nombre: "",
  telefono: "",
};

const schema = yup.object({
  email: yup.string().required("El email es requerido"),
  mensaje: yup.string().required("El mensaje es requerido"),
  nombre: yup.string().required("El nombre es requerido"),
  telefono: yup.string().required("El telefono es requerido"),
});

const serviceID = "default_service";
const templateID = "template_h8z0kdk";

export default function Form() {
  const resolver = useYupValidationResolver(schema);
  const { control, handleSubmit, reset, formState } = useForm<Params>({
    defaultValues: INITIAL,
    resolver,
  });

  const onSubmit = useCallback(async (data: Params) => {
    try {
      const res = await emailjs.send(serviceID, templateID, data, {
        publicKey: "GcObPSENToZRNCci-",
        blockList: {
          watchVariable: data.email,
        },
      });
      if (res.status === 200) {
        toast.success("Información de contacto enviado correctamente");
        reset();
      } else {
        toast.error(res.text);
      }
    } catch (error) {
      let message =
        "Ha ocurrido un error inesperado, favor de intentarlo mas tarde";
      if (error instanceof EmailJSResponseStatus) message += `: ${error.text}`;
      toast.error(message);
    }
  }, []);

  return (
    <>
      <Toaster position="top-right" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full"
      >
        <Controller
          control={control}
          name="nombre"
          render={({ field, fieldState: { error } }) => (
            <>
              <label className="text-sm" htmlFor="name">
                Nombre
              </label>
              <input
                {...field}
                id="name"
                type="text"
                placeholder="Nombre"
                className={inputClass}
                max="20"
              />
              {error?.message && (
                <span className="text-[9.5px] text-rose-400">
                  {error.message}
                </span>
              )}
            </>
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field, fieldState: { error } }) => (
            <>
              <label className="text-sm" htmlFor="email">
                Correo electrónico
              </label>
              <input
                {...field}
                id="email"
                type="text"
                placeholder="Correo electrónico"
                className={inputClass}
              />
              {error?.message && (
                <span className="text-[9.5px] text-rose-400">
                  {error.message}
                </span>
              )}
            </>
          )}
        />
        <Controller
          control={control}
          name="telefono"
          render={({ field, fieldState: { error } }) => (
            <>
              <label className="text-sm" htmlFor="phone">
                Teléfono
              </label>
              <input
                {...field}
                id="phone"
                type="text"
                placeholder="Teléfono"
                className={inputClass}
              />
              {error?.message && (
                <span className="text-[9.5px] text-rose-400">
                  {error.message}
                </span>
              )}
            </>
          )}
        />
        <Controller
          control={control}
          name="mensaje"
          render={({ field, fieldState: { error } }) => (
            <>
              <label className="text-sm" htmlFor="message">
                Mensaje
              </label>
              <textarea
                {...field}
                id="message"
                placeholder="Mensaje"
                className={inputClass}
                rows={8}
              ></textarea>
              {error?.message && (
                <span className="text-[9.5px] text-rose-400">
                  {error.message}
                </span>
              )}
            </>
          )}
        />
        <button
          className="self-center w-[200px] h-[50px] border border-blue-50 rounded flex items-center justify-center"
          type="submit"
          disabled={formState.isSubmitting}
        >
          {formState.isSubmitting ? <Spinner /> : "Enviar"}
        </button>
      </form>
    </>
  );
}
