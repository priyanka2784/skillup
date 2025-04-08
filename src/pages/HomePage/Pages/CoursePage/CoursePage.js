import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../../../../COMPONENTS/Sidebar";

function CoursePage() {
  const location = useLocation();
  const data = location.state;

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar topics={data.topics} />
      {data ? (
        <>
          <h1 className="">{data.title ?? ""}</h1>
          {data.topics.map((topic, index) => (
            <div key={index}>
              <h2>{topic.name}</h2>
              <pre>{topic.content}</pre>
            </div>
          ))}
        </>
      ) : (
        <h1>Data not found</h1>
      )}
    </div>
  );
}

export default CoursePage;
