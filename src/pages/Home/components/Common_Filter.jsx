import styled from "styled-components";

const ClickedFilter = styled.div`
  cursor: pointer;
  display: flex;
  padding: 0.375rem 0.875rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  color: #ffffff;

  border-radius: 6.25rem;
  background-color: #5a5c63;
`;

const NotClickedFilter = styled.div`
  cursor: pointer;
  display: flex;
  padding: 0.375rem 0.875rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  border-radius: 6.25rem;
  background-color: #ffffff;

  color: #5a5c63;
`;

const Common_Filter = ({ filter, filter_num, title, onClick }) => {
  if (filter === filter_num) {
    return <ClickedFilter>{title}</ClickedFilter>;
  } else {
    return (
      <NotClickedFilter onClick={() => onClick(filter_num)}>
        {title}
      </NotClickedFilter>
    );
  }
};
export default Common_Filter;
