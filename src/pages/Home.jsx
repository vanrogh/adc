import { Link } from "react-router-dom";

const advantages = [
    'Прямой производитель',
    'Стоимость',
    'Любые формы оплаты',
    'Качество',
    'Оперативность',
    'Доставка',
];

const Home = () => {
  return (
    <section className="mt-10 max-container">
        <h1 className="lg:text-6xl text-4xl font-bold text-center lg:w-[700px] lg:mx-auto mx-6">Рекламно-производственная компания "AD Company"</h1>
        <h2 className="mt-20 lg:text-2xl text-xl font-medium text-center lg:w-[700px] lg:mx-auto mx-6">Мы одни из лидеров в сфере рекламных услуг Казахстана. С 2012 года на рынке изготовления рекламы. Собственное производство. Полный спектр Рекламных услуг</h2>

        <div className="mt-16 lg:ml-80 ml-8">
        <h2 className="lg:text-2xl ml-16 font-semibold">Наши преимущества:</h2>
        <ul className="lg:text-2xl">
        {advantages.map((advantage) => (
            <li key={advantage} value={advantage}>
                {advantage}
            </li>
            ))}
        </ul>
        <p>Легко! Быстро! С улыбкой!</p>
        <p>Мы дорожим репутацией, нас рекомендуют друзьям!</p>
        </div>
        
    </section>
  )
}

export default Home