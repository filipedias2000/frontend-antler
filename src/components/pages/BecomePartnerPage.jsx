import React, { useState } from 'react';

function BecomePartnerPage() {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted with value:", inputValue);
    };
    
    return (
        <div className="min-h-screen flex items-center justify-center ">
            <form onSubmit={handleSubmit} className=" ">
                <h1 className="flex block ">NeoTaste-Partner werden</h1>
                <br/>
                <p className="flex block ">Jetzt unverbindlich mehr Infos erhalten. 
                Wir melden uns!</p>
                <br/>
                
                <label for="restaurant" className="block " >Restaurant</label>
                <input type="text" name="restaurant" id="restaurant" className="flex block"/>
                <label for="city" className="flex block">Stadt</label>
                <input type="text" name="city" id="city" className="flex block"/>
                <label for="contact-person" className="flex block">Ansprechpartner</label>
                <input type="text" name="contact-person" id="contact-person" 
                className="flex block"/>
                <label for="email" className="flex block ">E-mail</label>
                <input type="email" name="email" id="email" className="flex block "/>
                <label for="phone-number" className="flex block ">Telefonnummer</label>
                <input type="text" name="phone-number" id="phone-number" 
                className="flex block "/>
                <label for="priority-contact" className="flex block ">
                    Bevorzugte Kontaktaufnahme</label>
                {/* <input type="number" name="priority-contact" id="priority-contact"/> */}
                <select className="flex block r">
                    <optgroup label="Bitte auswählen" disabled>
                        <option value="" disabled hidden>Bitte auswählen</option>
                    </optgroup>
                    <option value="via-email">Via E-Mail</option>
                    <option value="via-telephone">Via Telefon</option>
                </select>
                <label for="remark" className="flex block ">Bemerkung</label>
                <input type="string" name="remark" id="remark" className="flex block "/>
                <label for="question" className="flex block ">
                    Wie sind Sie auf uns aufmerksam geworden?</label>
                {/* <input type="string" name="question" id="question" /> */}
                <select className="flex block ">
                    <optgroup label="Bitte auswählen" disabled>
                        <option value="" disabled hidden>Bitte auswählen</option>
                    </optgroup>
                    <option value="recommendation-from-friends">Empfehlung von 
                    Bekannten</option>
                    <option value="social-media">Social Media</option>
                    <option value="neo-taste-contact">Kontaktaufnahme durch NeoTaste</option>
                    <option value="other-way-of-hearing">Anderes, bitte präzisieren</option>
                </select>
                <label for="different-contact" className="flex block ">
                    Anderer Kontaktpunkt</label>
                <input type="string" name="different-conctact" id="different-contact" 
                className="flex block "/>
                <button type="submit" className="flex block ">Einsenden</button>
            </form>
        </div>
    )
}

export default BecomePartnerPage;