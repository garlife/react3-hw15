import roadmap from "./roadmap.png";

const Img = () => {
    return (
      <div style={{ height: "1000 px" }}>
        <h1>Роадмап курса</h1>
        <img
          src={roadmap}
          alt="course roadmap image"
          style={{ width: "1000 px", height: "1000 px" }}
        ></img>
      </div>
    );
  };

  export default Img;