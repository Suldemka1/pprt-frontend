import React from "react";
import { useEffect, useState } from "react";
import { Form, FloatingLabel, FormGroup, FormCheck, Button, Row } from "react-bootstrap";
import { PageName } from "../components/PageName/PageName";
import Link from "next/link";
import Head from 'next/head'

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

    data['surname'] = surname
    data['name'] = name
    data['patronymic'] = patronymic
    data['email'] = email
    data['phone'] = phone
    data['body'] = body
    data['files.file'] = image
    formData.append(`files.file`, image, image.name)
    

    formData.append("data", JSON.stringify(data))

    try {
      const response = await fetch(`${process.env.APIpath}/api/appeals`, {
        method: "POST",
        body: formData
      })
    }

    catch (e) {
      console.log(e)
    }

  };


  const handleOfferCheckChange = (e) => {

    if (offerCheck == false) {
      setOfferCheck(true)
      setButtonDisabled(false)
    }
    else {
      setOfferCheck(false)
      setButtonDisabled(true)
    }
  }


  return (
    <>
      <Head>
        <title>Прием заявок</title>
      </Head>
      <PageName title='Прием заявок' />

      <Form>

        <FormGroup style={{ margin: "auto" }}>

          <FloatingLabel
            controlId="floatingInput"
            label="Фамилия"
            className="mb-3">
            <Form.Control
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              placeholder="Фамилия" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Имя"
            className="mb-3">
            <Form.Control
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Имя" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Отчество"
            className="mb-3">
            <Form.Control
              value={patronymic}
              onChange={(e) => setPatronymic(e.target.value)}
              placeholder="Отчество" />
          </FloatingLabel>


          <FloatingLabel
            controlId="floatingInput"
            label="Номер телефона"
            className="mb-3">
            <Form.Control
              type="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Номер телефона" />
          </FloatingLabel>


          <FloatingLabel
            controlId="floatingInput"
            label="Адрес электронной почты"
            className="mb-3">
            <Form.Control
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Адрес электронной почты" />
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
              style={{ resize: 'none', }} />
          </FormGroup>

          <FormGroup className="d-flex">
            <FormCheck
              type="switch"
              id="custom-switch"
              value={offerCheck}
              onChange={handleOfferCheckChange}
            />
            <Link href='/document/personal_data.docx'><a>Я ознакомлен с Политикой обработки персональных данных и принимаю публичную Оферту</a></Link>
          </FormGroup>

          <input type={'file'} onChange={e => setImage(e.target.files[0])} />

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