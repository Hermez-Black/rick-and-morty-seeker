import PageBox from "./PageBox";

export default function NavPaginator({ Pagination }) {
  return (
    <div className="navPaginatorContainer">
        {
        Pagination.map((boxPage) => {
            return <PageBox key={boxPage} number={boxPage} />
        })
        }
    </div>
  );
}
