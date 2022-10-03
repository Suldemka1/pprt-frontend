import footer from './footer.module.scss'
import Link from 'next/link'
import { AiOutlineMail, AiFillPhone } from 'react-icons/ai'
import { Container } from 'react-bootstrap'
import Image from 'next/image'

const Footer = (props) =>
  <footer>
    <Container>
      <div className={footer.footer}>
        <div className={footer.jurinfo}>
          <div>
            <div className={footer.minname}>
              <Link href="/"><a>{props.mincompressedname}</a></Link>
            </div>
            <div className={footer.type}>
              <Link href="/"><a>Официальный интернет-ресурс</a></Link>
            </div>
            <div className={footer.contacts}>
              <div>< AiFillPhone /><p>{props.phone}</p></div>
              <div>< AiOutlineMail /><p>{props.email}</p></div>
            </div>
          </div>

          <div className={footer.info}>
            <div><Link href="/documents/sample.pdf"><a>Использование материалов</a></Link></div>
            <div><Link href="/documents/personal_data.docx"><a>О персональной информации пользователей</a></Link></div>
            <div className={footer.social_media}>
              <Link className={footer.social_media_item} href="https://vk.com/club132363710"><Image alt='some' src="/vk_logo.png" width={30} height={30} className={footer.image}/></Link>
              <Link className={footer.social_media_item} href="https://t.me/polpredstvotuva"><Image alt='some' src="/tg_logo.png" width={30} height={30} className={footer.image}/></Link>
              {/* <div className={footer.social_media_item}><Link href="/"><a><Image alt='some' src="/vk_logo.png" width={40} height={40} /></a></Link></div> */}
            </div>
          </div>
        </div>

        <hr />
        <div className={footer.licence}>
          <p>Все материалы сайта доступны по лицензии: Лицензия на пользование</p>
          {/* <Image alt='some' src="/informer.png" width={100} height={40} /> */}
        </div>
      </div>
    </Container>
  </footer>

export default Footer