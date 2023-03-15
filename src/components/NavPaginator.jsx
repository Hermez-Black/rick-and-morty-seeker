import PageBox from "./PageBox";

export default function NavPaginator({ Pagination, setNewNumberPage }) {
  console.log(Pagination);
  return (
    <div className="navPaginatorContainer">
        {
        Pagination.map((boxPage, index) => {
            return <PageBox key={boxPage} number={index + 1} setNumberPage={setNewNumberPage} />
        })
        }
    </div>
  );
}
