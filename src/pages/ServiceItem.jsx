const ServiceItem = ({ service, title, description, linkText }) => (
    <div className="max-w-sm bg-white  rounded-lg dark:bg-primary ">
        <a href="#">
            <img className="rounded-t-lg" src={service} alt="" />
        </a>
        <div className="p-5 ">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            </a>
            {description && <p className='mb-3 font-normal text-gray-400'>{description}</p>}
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-primary bg-white rounded-lg hover:bg-white-400 focus:ring-4 ml-6">
                {linkText}
            </a>
        </div>
    </div>
);

export default ServiceItem;