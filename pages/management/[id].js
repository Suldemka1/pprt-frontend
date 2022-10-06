import { PersonPage } from "../../components/Person/PersonPage"

export const getServerSideProps = async (context) => {
  const { id } = context.params
  const res = await fetch(`${process.env.APIpath}/api/staffs/${id}?populate=*`)
  const person = await res.json()
  return {
    props: { person: person.data }
  }
}

function getImagesList(params) {
  let images = []

  params.map((item) => {
    images.push(process.env.APIpath + item.url)
  })
  return images
}

const ManagementItem = ({ person }) =>
  <>
    <PersonPage
        id={person.id}
        title={person.surname}

        surname={person.surname}
        name={person.name}
        patronymic={person.patronymic}
        position={person.position}

        education={person.education}
        biography={person.biography}
        preview_image={person.avatar.url}
        images={getImagesList(person.images)}

        email={person.email}
        phone={person.phone}

    />
  </>



export default ManagementItem