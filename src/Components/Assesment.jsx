//  section 1

import { useEffect } from "react";

//code snippet 1
export const useSessionStorate = (key, value) => {
  const [storedValue, setStoredValue] = useState("");

  useEffect(() => {
    if (localStorage.get(key)) {
      return setStoredValue(value);
    } else {
      localStorage.set(key, value);
    }
  }, [value]);

  return storedValue;
};

//code snippet 2
export const Tab1 = () => {
  return <div>Tab1</div>;
};

export const Tab2 = () => {
  return <div>Tab1</div>;
};

export const Tabs = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const tabsDisplay = [
    { titile: "TAB1", component: <Tab1 />, id: 1 },
    { titile: "TAB2", component: <Tab2 />, id: 2 },
  ];

  return (
    <div className="wrapper">
      {tabsDisplay.map((tab) => {
        return (
          <p
            onClick={() => {
              setCurrentTab(tab.id);
            }}
          >
            {tab.titile}
          </p>
        );
      })}
      {tabsDisplay[currentTab].component}
    </div>
  );
};

// js snippet
function delayExecution(callback, delay) {
  return setTimeout(callback, delay);
}

// section 3 second ques
const state = {
  tasks: {
    byId: {
      1: { id: "1", name: "Task 1", completed: false },
      2: { id: "2", name: "Task 2", completed: true },
      3: { id: "3", name: "Task 3", completed: false },
    },
    allIds: ["1", "2", "3"],
  },
};

function toFetchCompletedTasks(tasks) {
  tasks.allIds.map((id) => {
    if (tasks.byId(id).completed) {
      return tasks.byId(id);
    }
  });
}
toFetchCompletedTasks(state.tasks);

function toToggaleCompleted(state, id) {
  let tasks = structuredClone(state.tasks);
  tasks = {
    ...tasks,
    byId: {
      ...tasks.byId,
      [id]: { ...tasks.byId[id], completed: !tasks.byId[id].completed },
    },
  };
}

toToggaleCompleted(state, 1);

//section 4 advance react snippet 1

export function TractClicks({ children }) {
  const Component = React.cloneElement(children);
  const [clickCounter, setClickCounter] = useState(0);

  useEffect(() => {
    if (clickCounter > 0) {
      console.log(clickCounter, "count");
    }
  }, [clickCounter]);

  return (
    <div
      onClick={() => {
        setClickCounter((prev) => {
          return prev + 1;
        });
      }}
      className="wrapper"
    >
      <Component />
    </div>
  );
}
//section 4 sinnpet 2
function DebounceInputFetch(delay) {
  const [value, setValue] = useState("");

  useEffect(() => {
    let interval;
    interval = setTimeout(() => {
      //make the fetch operation usinf the value
    }, delay);
    return () => {
      clearInterval(interval);
    };
  }, [value]);

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
}

// section 5
const UserList = React.memo(({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}, users);

// section 5 2
const UserSearch = ({ users }) => {
  const [query, setQuery] = useState("");
  const filteredUsers = [];
  useEffect(() => {
    let interval;
    interval = setTimeout(() => {
      filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(query.toLowerCase())
      );
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [query]);

  return (
    <>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

//section 6 snippet 1

//candidate to implement function flattenArray here
function flattenArray(inputArray) {
  let flatendArray = [];
  let i = 0;
  function flatsArray(array) {
    for (item of array) {
      if (Array.isArray(item)) {
        flatsArray(item);
      } else {
        flatendArray[i] = item;
        i++;
      }
    }

    return flatendArray;
  }

  return flatsArray(inputArray);
}
// Example input
const inputArray = [1, [2, 3, [4, 5, [6, [7]]]], 8, [[9, 10], 11], [[[12]]]];
const flattenedArray = flattenArray(inputArray);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
