import { useQuery } from "@apollo/client";

import Checklist from "../components/Checklist";
import CheckListForm from "../components/CheckListForm";

import { GET_ALL_CHECKLISTS } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(GET_ALL_CHECKLISTS);
  const checkLists = data?.checkLists || [];

  return (
    <main>
      <div className="row">
        <div className="col-md-5 ml-auto">
          <div
            className="col-12 col-md-8 mb-3 p-3"
            style={{
              backgroundColor: "#edede9",
              opacity: "0.8",
              borderRadius: "65px",
            }}
          >
            <CheckListForm />
          </div>
          <div
            className="col-12 col-md-8 mb-3"
            style={{
              backgroundColor: "#edede9",
              opacity: "0.8",
              borderRadius: "65px",
            }}
          >
            {loading ? (
              <div>Loading...</div>
            ) : (
              <Checklist
                checkLists={checkLists}
                title="Here are your checklists!"
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
