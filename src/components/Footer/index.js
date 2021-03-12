import PropTypes from 'prop-types';
import './styles.scss';

const FILTER_BUTTONS = [
  { id: 'all', label: 'All' },
  { id: 'active', label: 'Active' },
  { id: 'completed', label: 'Completed' },
];

const Footer = ({ tasksCount = 0, filter, changeFilter, clearCompletedTasks }) => {
  return (<div className='footer'>
    <div>{tasksCount} tasks left</div>
    <div className='footer__filter'>
      {FILTER_BUTTONS.map(({ id, label }) => (
        <button key={id}
                onClick={() => changeFilter(id)}
                className={`btn footer__filter__btn ${filter === id ? 'active' : ''}`}>
          {label}
        </button>
      ))}
    </div>
    <button className='btn' onClick={clearCompletedTasks}>Clear Completed</button>
  </div>)
};

Footer.propTypes = {
        tasksCount: PropTypes.number,
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
  clearCompletedTasks: PropTypes.func.isRequired,
};

export default Footer;