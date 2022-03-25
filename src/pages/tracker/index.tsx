import Header from '../../components/child/Header';
import Tasks from '../../components/widgets/Tasks';
const list = [
  { id: 1, text: 'One', day: 'Mar 12 at 1:30pm', remainder: true },
  { id: 2, text: 'Two', day: 'Mar 13 at 1:30pm', remainder: false },
  { id: 3, text: 'Three', day: 'Mar 14 at 1:30pm', remainder: false },
];

const Tracker = () => {
  return (
    <>
      <div className="container">
        <Header title="hello" />
        <Tasks tasks={list} />
      </div>
    </>
  );
};

export default Tracker;
