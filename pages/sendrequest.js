import React, { useState } from "react";
import { PageName } from "../components/PageName/PageName";
import Link from "next/link";
import Head from 'next/head'
import axios from 'axios'
import MainPageLayout from "../layouts/MainPageLayout";

export default function SendRequest() {
    const [surname, setSurname] = useState('')
    const [name, setName] = useState('')
    const [patronymic, setPatronymic] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [body, setBody] = useState('')
    const [files, setFiles] = useState(null)
    const [offerCheck, setOfferCheck] = useState(false)

    const uploadToServer = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        const data = {}
        data['surname'] = surname
        data['name'] = name
        data['patronymic'] = patronymic
        data['email'] = email
        data['phone'] = phone
        data['body'] = body

        try {
            await formData.append('data', JSON.stringify(data))

            for (let i = 0; i < files.length; i++) {
                await formData.append('files.files', files[i], files[i].name)
            }
            await axios.post(`${process.env.APIpath}/api/appeals`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            })
                .then((res) => {
                    setSurname('')
                    setName('')
                    setPatronymic('')
                    setPhone('')
                    setEmail('')
                    setBody('')
                    setOfferCheck(false)
                    setFiles(null)
                })
                .catch((err, res) => {
                    console.log(err);
                });

        } catch (e) {
            console.error(e)
        }
    };

    return (
        <MainPageLayout>
            <Head>
                <title>Прием обращений</title>
            </Head>
            <PageName title='Прием обращений' />

            <div className="leading-7 [&>p]:pb-3">
                <p>Просим Вас внимательно ознакомиться с порядком приема и рассмотрения обращений,
                направленных в адрес Полномочного представительства Республики Тыва в г. Москве.</p>
                <p>Обращения, поступившие в адрес Полномочного представительства Республики Тыва в г. Москве,
                рассматриваются в соответствии с положениями Федерального закона от 2 мая 2006 года № 59-ФЗ
                «О порядке рассмотрения обращений граждан Российской Федерации».</p>
                <p>Вы можете направить обращение в Полномочное представительство Республики Тыва в г. Москве:</p>
                <p>- путем заполнения соответствующей формы, размещенной на официальном сайте</p>
                <p>- путём его направления на почтовый или электронный адрес Полномочного представительства Республики Тыва в г. Москве</p>
                <p>- путем звонка по телефону приемной Полномочного представительства Республики Тыва в г. Москве</p>
                <hr/>
                <p>1. Обращения, направленные в форме электронного документа через официальный сайт, поступают на
                    рассмотрение в Полномочное представительство Республики Тыва в г. Москве и рассматриваются
                    работниками
                    Полномочного представительства Республики Тыва в г. Москве.</p>
                <p>2. Перед отправкой обращения в форме электронного документа необходимо его написать.</p>
                <p>2.1. в обязательном порядке указав в электронной анкете:</p>
                <p>2.1.1. свою фамилию, имя, отчество (последнее - при наличии);</p>
                <p>2.1.2. адрес электронной почты, по которому должны быть направлены ответ, уведомление о переадресации
                    обращения;</p>
                <p>2.2. изложив в поле ввода текста обращения в форме электронного документа суть предложения,
                    заявления,
                    жалобы.</p>
                <p>3. Ответ на Ваше обращение в форме электронного документа либо уведомление о его переадресации
                    направляется в форме электронного документа по адресу электронной почты (е-mail), указанному Вами в
                    обращении в форме электронного документа.</p>
                <p>4. В предназначенном для обязательного заполнения поле ввода текста обращения в форме электронного
                    документа Вы излагаете суть предложения, заявления или жалобы в соответствии со ст. 7 Федерального
                    закона от 2 мая 2006 года № 59-ФЗ «О порядке рассмотрения обращений граждан Российской
                    Федерации».</p>
                <p>В случае, если текст Вашего обращения не позволяет определить суть предложения, заявления или жалобы,
                    ответ на обращение не дается, и оно не подлежит направлению на рассмотрение в государственный орган,
                    орган местного самоуправления или должностному лицу в соответствии с их компетенцией, о чем Вам
                    будет
                    сообщено в течение семи дней со дня регистрации обращения.</p>
                <p>5. В случае необходимости в подтверждение своих доводов Вы вправе приложить к обращению необходимые
                    документы и материалы в электронной форме.</p>
                <p>Приложить необходимые документы и материалы в электронной форме Вы можете в любой
                    последовательности.</p>
                <p>Информируем Вас, что передача файла(ов) вложения на почтовый сервер зависит от пропускной способности
                    сети «Интернет», а получение - от объема обрабатываемых почтовым сервером переданных файлов.</p>
                <p>6. Если в направленном Вами тексте в форме электронного документа, содержащемся в поле ввода текста
                    обращения в форме электронного документа, не изложено предложение, заявление или жалоба, а только
                    ссылка
                    на приложение (файл вложение) либо контент интернет-сайта, то в ответе разъясняется порядок его
                    рассмотрения, установленный Федеральным законом от 2 мая 2006 года № 59-ФЗ «О порядке рассмотрения
                    обращений граждан Российской Федерации».</p>
                <p>7. Обращаем Ваше внимание на порядок рассмотрения отдельных обращений, предусмотренный ст.11
                    Федерального
                    закона от 2 мая 2006 года № 59-ФЗ «О порядке рассмотрения обращений граждан Российской
                    Федерации».</p>
                <p>8. При направлении Вами обращений, касающихся обжалования судебных решений, необходимо иметь в виду
                    следующее:</p>
                <p>Согласно Конституции Российской Федерации, правосудие в России осуществляется только судом. Органы
                    судебной власти самостоятельны и действуют независимо от законодательной и исполнительной властей.
                    Решения судебных органов обжалуются в установленном законом процессуальном порядке.</p>
                <p>10. Информация о персональных данных авторов обращений, направленных в форме электронного документа,
                    сведения, содержащиеся в обращениях авторов, а также сведения, касающиеся частной жизни авторов,
                    хранятся и обрабатываются с соблюдением требований российского законодательства.</p>
            </div>

            <form className="w-fit py-3">
                <div className="flex flex-col gap-3">
                    <input value={surname} onChange={(e) => setSurname(e.target.value)} placeholder="Фамилия"
                        maxLength={30} required
                        className="border border-black rounded py-2 px-3" />
                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Имя"
                        maxLength={30} required
                        className="border border-black rounded py-2 px-3" />
                    <input value={patronymic} onChange={(e) => setPatronymic(e.target.value)} placeholder="Отчество"
                        maxLength={30}
                        className="border border-black rounded py-2 px-3" />
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Номер телефона"
                        maxLength={12} required
                        className="border border-black rounded py-2 px-3" />
                    <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Адрес электронной почты"
                        maxLength={30} required
                        className="border border-black rounded py-2 px-3" />
                    <textarea value={body} onChange={e => setBody(e.target.value)} rows={7}
                        placeholder="Введите ваше сообщение"
                        required
                        maxLength={1500}
                        className="w-full border border-black rounded py-3 px-3 resize-none" />
                    <p>
                        В случае необходимости в подтверждение своих доводов гражданин вправе приложить к обращению
                        необходимые документы и материалы в электронной форме, воспользовавшись функцией «Прикрепить
                        файл».</p>
                    <p>Обращаем внимание, что прикрепляемые в предложенном на сайте формате документы и материалы
                        служат лишь подтверждением доводов автора обращения, изложенных в тексте обращения.</p>
                    <p>Приложить необходимые документы и материалы в электронной форме можно в любой последовательности
                        двумя самостоятельными вложениями файла без архивирования (файл вложения) по одному из двух
                        разных типов допустимых форматов:</p>
                    <p>текстового (графического) формата: txt, doc, docx, rtf, xls, xlsx, pps, ppt, odt, ods, odp, pub,
                        pdf, jpg, jpeg, bmp, png, tif, gif, pcx;</p>
                    <p>аудио- (видео-) формата: mp3, wma, avi, mp4, mkv, wmv, mov, flv.</p>
                    <p>Иные форматы не обрабатываются.</p>
                    <p>При подключении оборудования пользователя к сети «Интернет» по выделенным каналам связи с
                        использованием технологий ADSL, 3G, 4G, WiFi и иных технологий, обеспечивающих аналогичные
                        скорости передачи данных в сети «Интернет», передача и обработка файла(ов) с суммарным размером:
                        - до 5 Мб осуществляется, как правило, без задержки во времени;
                        - от 5 Мб до 10 Мб может осуществляться с задержкой во времени;
                        - свыше 10 Мб может быть не осуществлена.</p>
                    <p>Для приложения к обращению необходимых документов и материалов в электронной форме нажмите
                        кнопку «Выберите файл».</p>

                    <input type="file" onChange={(e) => {
                        setFiles(e.target.files)
                    }} multiple={true} />
                </div>


                <div className="flex gap-2">
                    <input
                        type="checkbox"
                        id="custom-switch"
                        checked={offerCheck}
                        onChange={() => {
                            offerCheck === false ? setOfferCheck(true) : setOfferCheck(false)
                        }}
                    />

                    <Link
                        href={`${process.env.APIpath}/uploads/Obrashheniya_v_forme_elektronnogo_dokumenta_cherez_oficzialnyj_sajt_2557efe2fe.pages`}>
                        <a>Я ознакомлен с Политикой обработки персональных данных и принимаю публичную Оферту</a>
                    </Link>
                </div>

                <button
                    type="submit"
                    disabled={!offerCheck}
                    onClick={uploadToServer}
                    className={offerCheck ? "activated" : "disabled"}>
                    Отправить
                </button>
            </form>

            <style>
                {`
                    .disabled {
                        width: fit-content;
                        padding-top: 0.5rem;
                        padding-bottom: 0.5rem; 
                        padding-left: 1rem;
                        padding-right: 1rem; 
                        background-color: #3B82F6; 
                        color: #ffffff; 
                        font-weight: 700; 
                        border-radius: 0.25rem; 
                        cursor: not-allowed; 
                        opacity: 0.5; 
                    }
                    
                    .activated {
                        width: fit-content;
                        padding-top: 0.5rem;
                        padding-bottom: 0.5rem; 
                        padding-left: 1rem;
                        padding-right: 1rem; 
                        background-color: #3B82F6; 
                        color: #ffffff; 
                        font-weight: 700; 
                        border-radius: 0.25rem;
                        border-color: #1D4ED8;
                    }
                    
                    .activated:hover {
                         background-color: #1D4ED8; 
                    }
                `}
            </style>
        </MainPageLayout>
    )
}