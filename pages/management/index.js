import { PersonCard } from "../../components/Person/Person";
import { PageName } from "../../components/PageName/PageName";

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.APIpath}/api/staffs?populate=*`)
  const staff = await res.json()

  return {
    props: {
      staff: staff.data
    }
  }
}

export default function Management({ staff }) {

  const show = staff.map((item) =>
    <PersonCard
      id={item.id}
      key={item.id}
      surname={item.surname}
      name={item.name}
      patronymic={item.patronymic}
      position={item.position}
      email={item.email}
      phone={item.phone}
      avatar={item.avatar}
    />
  )

  return (
    <div className="management">
      <PageName title='Руководство полномочного представительства Республики Тыва в г. Москве' />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'space-between' }}>
        {show}
      </div>
    </div>
  )
}