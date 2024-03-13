import service from '../assets/service.jpg';
import service2 from '../assets/service2.jpg';
import ServiceItem from './ServiceItem';

const Services = () => {
  return (
    <section className='flex justify-center max-container'>

    <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-3'>
        <div className="max-w-sm rounded-lg bg-primary">
            <a href="#">
                <img className="rounded-t-lg" src={service} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Полиграфия</h5>
                </a>
                
                <ul className='mb-3 font-normal text-gray-400'>
                    <li>Цифровая печать</li>
                    <li>Офсетная печать</li>
                    <li>Коробки - упаковки</li>
                    <li>Рулонная печать</li>
                </ul>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-primary bg-white rounded-lg hover:bg-white-400 focus:ring-4">
                    Подробнее
                </a>
            </div>
        </div>  

        <ServiceItem service={service2} title='Флексо печать' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, sit.' linkText='Подробнее' />
        <ServiceItem service={service} title='Сувенирная продукция' linkText='Подробнее' />
        <ServiceItem service={service2} title='Брендирование' linkText='Подробнее' />
        <ServiceItem service={service} title='Наружная реклама' linkText='Подробнее' />
        <ServiceItem service={service2} title='Аренда билбордов по всему Казахстану' linkText='Подробнее' />
        <ServiceItem service={service} title='LED экраны' linkText='Подробнее' />
        <ServiceItem service={service2} title='Аренда LED Экранов' linkText='Подробнее' />  
        
    </div>
    </section>
  )
}

export default Services