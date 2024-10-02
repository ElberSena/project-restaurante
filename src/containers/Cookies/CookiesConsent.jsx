'use client'

import React, { useEffect, useState } from 'react'
import { hasCookie, setCookie } from 'cookies-next'
import { Link } from 'react-router-dom';

function CookiesConsent() {

    const [showConsent, setShowConsent] = useState(true);

    useEffect(() => {
        setShowConsent(hasCookie('localConsent'));
    }, []);

    const acceptCookie = () => {
        setShowConsent(true);
        setCookie('localConsent', 'true', {})
        
    };

    if (showConsent) {
        return null;
    }

    return (
        <div className='content-cookie'>
            <div className='block'>
                <span className='block-text'>
                    Através de cookies (próprios e de terceiros) recolhemos dados que nos permitem personalizar conteúdos e apresentar ofertas adaptadas às suas necessidades. Para garantir uma experiência de compra simples, clique em 'Aceitar'. Para mais informações, visite a nossa <Link href='/legal' className='font-bold text-custom' >Política de Privacidade</Link>.
                </span>

                <Link className='btn_cookie' onClick={acceptCookie}>
                    Aceito
                </Link>
            </div>
        </div>
    )
}

export default CookiesConsent