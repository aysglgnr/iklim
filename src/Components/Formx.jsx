import React from 'react'

const  Formx = () => {
    return (
        <section className='contact'>
            <form>
                <h1>İletişim Formu</h1>
                <div className='input-box'>
                    <label>Adınız ve Soyadınız</label>
                    <input type='text' className='field' placeholder='.....' required/>
                </div>
                <div className='input-box'>
                    <label>Telefon Numaranız</label>
                    <input type='text' className='field' placeholder='.....' required/>
                </div>
                <div className='input-box'>
                    <label>Geri Bildirimleriniz</label>
                    <textarea name='' id='' className='field-mess' placeholder='.....' required></textarea>
                    <br></br>
                </div>
                <p>        </p>
                <button type='submit'>Gönder</button>
            </form>
        </section>
    )
}

export default Formx;