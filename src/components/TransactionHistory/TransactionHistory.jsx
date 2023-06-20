import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={css.wrapper}>
      <thead>
        <tr className={css.head}>
          <th className={css.headTopLeft}>Type</th>
          <th>Amount</th>
          <th className={css.headTopRight}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.main}>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={css.content} key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
