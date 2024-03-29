import { NavLink } from "react-router-dom"

const NotFound = () => {
  return (
    <section className="h-[500px] flex justify-center items-center flex-col gap-10 mb-[134px]">
      <h2 className="md:text-4xl text-2xl">Страница не найдена!</h2>
      <p className="text-2xl max-w-[760px] mx-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia alias cupiditate ad nostrum doloribus iste tempora quisquam excepturi repellat, fugit cumque dolore magni possimus inventore neque provident! Sunt, quo eos?</p>

      <p className="text-2xl">Вернутья на <NavLink to="/" className="underline">Главную</NavLink>.</p>
    </section>
  )
}

export default NotFound