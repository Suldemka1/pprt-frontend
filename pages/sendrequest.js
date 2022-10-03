import React from "react";
import {useState} from "react";
import {Form, FloatingLabel, FormGroup, FormCheck, Button} from "react-bootstrap";
import {PageName} from "../components/PageName/PageName";
import Link from "next/link";
import Head from 'next/head'
import axios from 'axios'

export default function SendRequest() {
    const [surname, setSurname] = useState('')
    const [name, setName] = useState('')
    const [patronymic, setPatronymic] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [body, setBody] = useState('')
    const [image, setImage] = useState()
    const [offerCheck, setOfferCheck] = useState(false)
    const [buttonDisabled, setButtonDisabled] = useState(true)

    const uploadToServer = async (values) => {

        const formData = new FormData()
        const data = {}
        const files = {}

        data['surname'] = surname
        data['name'] = name
        data['patronymic'] = patronymic
        data['email'] = email
        data['phone'] = phone
        data['body'] = body


        formData.append('data', JSON.stringify(data))

        // formData.append('files.multi', image)

        try {
            // await axios({
            //   method: 'POST',
            //   url: `${process.env.APIpath}/api/appeals`,
            //   data: formData,
            //   headers: { "Content-Type": "multipart/form-data" }
            // })
            //   .then((res) => {
            //     console.log(res)
            //   })
            //   .catch((error) => {
            //     console.error(error)
            //   })

            axios.post(`${process.env.APIpath}/api/appeals`, formData, {
                headers: {"Content-Type": "multipart/form-data"},
            })
                .then((res) => {
                })
                .catch((err) => {
                    console.log(err);
                });

        } catch (e) {
            console.error(e)
        }
    };


    const handleOfferCheckChange = (e) => {

        if (offerCheck == false) {
            setOfferCheck(true)
            setButtonDisabled(false)
        } else {
            setOfferCheck(false)
            setButtonDisabled(true)
        }
    }


    return (
        <>
            <Head>
                <title>Прием обращений</title>
            </Head>
            <PageName title='Прием обращений'/>
            <p>1. Обращения, направленные в форме электронного документа через официальный сайт, поступают на
                рассмотрение в Полномочное представительство Республики Тыва в г. Москве и рассматриваются работниками
                Полномочного представительства Республики Тыва в г. Москве.</p>
            <p>2. Перед отправкой обращения в форме электронного документа необходимо его написать.</p>
            <p>2.1. в обязательном порядке указав в электронной анкете:</p>
            <p>2.1.1. свою фамилию, имя, отчество (последнее - при наличии);</p>
            <p>2.1.2. адрес электронной почты, по которому должны быть направлены ответ, уведомление о переадресации
                обращения;</p>
            <p>2.2. изложив в поле ввода текста обращения в форме электронного документа суть предложения, заявления,
                жалобы.</p>
            <p>3. Ответ на Ваше обращение в форме электронного документа либо уведомление о его переадресации
                направляется в форме электронного документа по адресу электронной почты (е-mail), указанному Вами в
                обращении в форме электронного документа.</p>
            <p>4. В предназначенном для обязательного заполнения поле ввода текста обращения в форме электронного
                документа Вы излагаете суть предложения, заявления или жалобы в соответствии со ст. 7 Федерального
                закона от 2 мая 2006 года № 59-ФЗ «О порядке рассмотрения обращений граждан Российской Федерации».</p>
            <p>В случае, если текст Вашего обращения не позволяет определить суть предложения, заявления или жалобы,
                ответ на обращение не дается, и оно не подлежит направлению на рассмотрение в государственный орган,
                орган местного самоуправления или должностному лицу в соответствии с их компетенцией, о чем Вам будет
                сообщено в течение семи дней со дня регистрации обращения.</p>
            <p>5. В случае необходимости в подтверждение своих доводов Вы вправе приложить к обращению необходимые
                документы и материалы в электронной форме.</p>
            <p>Приложить необходимые документы и материалы в электронной форме Вы можете в любой последовательности.</p>
            <p>Информируем Вас, что передача файла(ов) вложения на почтовый сервер зависит от пропускной способности
                сети «Интернет», а получение - от объема обрабатываемых почтовым сервером переданных файлов.</p>
            <p>6. Если в направленном Вами тексте в форме электронного документа, содержащемся в поле ввода текста
                обращения в форме электронного документа, не изложено предложение, заявление или жалоба, а только ссылка
                на приложение (файл вложение) либо контент интернет-сайта, то в ответе разъясняется порядок его
                рассмотрения, установленный Федеральным законом от 2 мая 2006 года № 59-ФЗ «О порядке рассмотрения
                обращений граждан Российской Федерации».</p>
            <p>7. Обращаем Ваше внимание на порядок рассмотрения отдельных обращений, предусмотренный ст.11 Федерального
                закона от 2 мая 2006 года № 59-ФЗ «О порядке рассмотрения обращений граждан Российской Федерации».</p>
            <p>8. При направлении Вами обращений, касающихся обжалования судебных решений, необходимо иметь в виду
                следующее:</p>
            <p>Согласно Конституции Российской Федерации, правосудие в России осуществляется только судом. Органы
                судебной власти самостоятельны и действуют независимо от законодательной и исполнительной властей.
                Решения судебных органов обжалуются в установленном законом процессуальном порядке.</p>
            <p>10. Информация о персональных данных авторов обращений, направленных в форме электронного документа,
                сведения, содержащиеся в обращениях авторов, а также сведения, касающиеся частной жизни авторов,
                хранятся и обрабатываются с соблюдением требований российского законодательства.</p>
            <Form>

                <FormGroup style={{margin: "auto"}}>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Фамилия"
                        className="mb-3">
                        <Form.Control
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            placeholder="Фамилия"/>
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Имя"
                        className="mb-3">
                        <Form.Control
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Имя"/>
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Отчество"
                        className="mb-3">
                        <Form.Control
                            value={patronymic}
                            onChange={(e) => setPatronymic(e.target.value)}
                            placeholder="Отчество"/>
                    </FloatingLabel>


                    <FloatingLabel
                        controlId="floatingInput"
                        label="Номер телефона"
                        className="mb-3">
                        <Form.Control
                            type="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Номер телефона"/>
                    </FloatingLabel>


                    <FloatingLabel
                        controlId="floatingInput"
                        label="Адрес электронной почты"
                        className="mb-3">
                        <Form.Control
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Адрес электронной почты"/>
                    </FloatingLabel>

                    {/* <Button onClick={handleAddAuthor}>Добавить соавтора</Button> */}

                    <div className="coauthors" id="coauthors">
                    </div>

                    <FormGroup>
                        <Form.Control
                            as="textarea"
                            value={body}
                            onChange={e => setBody(e.target.value)}
                            rows={4}
                            placeholder="Введите ваше сообщение"
                            style={{resize: 'none',}}/>
                    </FormGroup>

                    <FormGroup className="d-flex">
                        <FormCheck
                            type="switch"
                            id="custom-switch"
                            value={offerCheck}
                            onChange={handleOfferCheckChange}
                        />
                        <Link
                            href={`${process.env.APIpath}/uploads/Obrashheniya_v_forme_elektronnogo_dokumenta_cherez_oficzialnyj_sajt_2557efe2fe.pages`}>
                            <a>Я ознакомлен с Политикой обработки персональных данных и принимаю публичную Оферту</a>
                        </Link>
                    </FormGroup>

                    {/* <input type='file' name='multi' onChange={e => setImage(e.target.files)} /> */}

                    <Button
                        // type="submit"
                        disabled={buttonDisabled}
                        onClick={uploadToServer}
                    >Отправить</Button>
                </FormGroup>
            </Form>
        </>
    )
}