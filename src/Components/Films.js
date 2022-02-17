import Film from "./Film";

function Films({ films }) {
  return (
    <div>
      {films.map((film, index) => (
        <Film key={index} film={film} />
      ))}
    </div>
  )
}

export default Films;