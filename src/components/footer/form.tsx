const inputClass = "pl-2 py-1 text-black resize-none";

export default function Form() {
  return (
    <form action="" className="flex flex-col gap-4">
      <input type="text" placeholder="nombre" className={inputClass} max="20" />
      <input type="text" placeholder="email" className={inputClass} />
      <input type="text" placeholder="telefono" className={inputClass} />
      <textarea placeholder="Mensaje" className={inputClass}></textarea>
      <input type="submit" />
    </form>
  );
}
