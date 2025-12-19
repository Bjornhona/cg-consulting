import { SectionList } from "@/types/sections"
import { ListItem } from "@/types/sanity"

const List = ({ title, description, listItems }: SectionList) => {
  return (
    <section className="list">
      <div className="container">
        <h2>{title}</h2>
        <p>{description}</p>
        <ul>
          {listItems?.map((item: ListItem, index: number) => (
            <li key={index}>{item.title && <strong>{item.title}:</strong>} {item.text &&item.text}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default List
