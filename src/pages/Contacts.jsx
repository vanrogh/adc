import React from 'react'

const Contacts = () => {
  return (
    <section className='mt-16'>
            <h1 className='text-4xl text-center'>Контакты</h1>
            <p className='text-sm text-slate-gray text-center mt-10 mx-6'>Вы можете связаться с нами посредством нижеприведенной формы. Письмо с этой формы поступит на электронный адрес компании и мы в ближайшее время вам ответим.</p>

            <form className='max-w-[600px] md:mx-auto text-[12px] mt-10 mx-6'>
                <label className='block mb-[15px]'>
                    <span className='mb-[5px]'>Ваше имя:</span>
                    <input className='input' type="text" name="name" />
                </label>
                <label className='block mb-[15px]'>
                    <span className='mb-[5px]'>Компания:</span>
                    <input className='input' type="text" name="company" />
                </label>
                <label className='block mb-[15px]'>
                    <span className='mb-[5px]'>Город:</span>
                    <input className='input' type="text" name="city" />
                </label>
                <label className='block mb-[15px]'>
                    <span className='mb-[5px]'>Контактный телефон:</span>
                    <input className='input' type="tel" name="tel" />
                </label>
                <label className='block mb-[15px]'>
                    <span className='mb-[5px]'>Ваш e-mail:</span>
                    <input className='input' type="email" name="email" required />
                </label>
                <label className='block mb-[15px]'>
                    <span className='mb-[5px]'>Тема сообщения:</span>
                    <input className='input' type="text" name="subject" />
                </label>
                <label className='block mb-[15px]'>
                    <span>Текст письма:</span>
                    <textarea className='input' name="message"></textarea>
                </label>
                <label className='block mb-[15px]'>
                    <span className='mb-[5px]'>Как вы узнали о нашей компании:</span>
                    <input className='input' type="text" name="text" />
                </label>
                <button className='bg-primary text-white py-[10px] px-[15px] rounded-lg cursor-pointer hover:bg-slate-gray'>Отправить</button>
        </form>
    </section>
  )
}

export default Contacts