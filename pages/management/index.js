import { PersonCard } from "../../components/Person/PersonCard";
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

  const show = staff.map((item) => {

    if (item.id === 1) {
      return (
        <span className="w-full">
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
        </span>
      )

    }
    else {
      return <PersonCard
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
    }


  }

  )

  return (
    <div className="management">
      <PageName title='Руководство полномочного представительства Республики Тыва в г. Москве' />

      <div className="flex flex-wrap gap-4 justify-between">
        {show}
      </div>
    </div>
  )
}