import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../../../../COMPONENTS/Sidebar";

function CoursePage() {
  const location = useLocation();
  const data = location.state;
  const [selectedTopic, setSelectedTopic] = useState("");

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div style={{ display: "flex", marginTop: "70px" }}>
      <div style={{ display: "flex" }}>
        <Sidebar topics={data.topics} onSelectTopic={setSelectedTopic} />
      </div>
      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        {data ? (
          <>
            <h1 className="">{data.title ?? ""}</h1>
            <h3>{selectedTopic.name}</h3>
            <pre>{selectedTopic.content}</pre>
            {/* {selectedTopic.map((topic, index) => (
              <div key={index}>
                <h2>{topic.name}</h2>
                <pre>{topic.content}</pre>
              </div>
            ))} */}
          </>
        ) : (
          <h1>Data not found</h1>
        )}
      </div>
    </div>
  );
}

export default CoursePage;
