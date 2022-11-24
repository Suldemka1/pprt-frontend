import { PageName } from "../components/PageName/PageName";
import Link from "next/link";
import Head from 'next/head'
import axios from 'axios'
import MainPageLayout from "../layouts/MainPageLayout";
import AppealPageNotice from "../components/SendAppeal/AppealPageNotice";
import { useState } from "react";
import StandartLayout from "../layouts/StandartLayout";
import DocumentLink from "../components/Document/DocumentLink";

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
        <StandartLayout>
            <MainPageLayout>
                <Head>
                    <title>Прием обращений</title>
                </Head>
                <PageName title='Прием обращений' />

                <AppealPageNotice />

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

                        {/* <Link
                            href={`${process.env.APIpath}/uploads/politika_obrabotki_personalnyh_dannyh_e79f438d7a.pdf?updated_at=2022-11-24T03:08:46.185Z`} className="">
                             
                        </Link> */}
                        <div className="flex items-center gap-2">
                            <p>Я ознакомлен с</p>
                            <DocumentLink
                                filename="Политикой обработки персональных данных"
                                url={`${process.env.APIpath}/uploads/politika_obrabotki_personalnyh_dannyh_e79f438d7a.pdf?updated_at=2022-11-24T03:08:46.185Z`} />
                            <p>и принимаю публичную Оферту</p></div>
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
        </StandartLayout>

    )
}