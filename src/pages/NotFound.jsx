import { NavLink } from "react-router-dom"

const NotFound = () => {
  return (
    <section className="h-[500px] flex justify-center items-center flex-col gap-10 mb-[134px]">
      <h2 className="text-4xl">Страница не найдена!</h2>
      <p className="text-2xl w-[760px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia alias cupiditate ad nostrum doloribus iste tempora quisquam excepturi repellat, fugit cumque dolore magni possimus inventore neque provident! Sunt, quo eos?</p>

      <p className="text-2xl">Вернутья на <NavLink to="/" className="underline">Главную</NavLink>.</p>
    </section>
  )
}

export default NotFound