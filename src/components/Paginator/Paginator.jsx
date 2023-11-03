import { Pagination, Stack, useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';
import { colors } from '../../colors';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from 'src/redux/drinks/drinksPage/drinksPageSlice';
import { selectPage } from 'src/redux/drinks/drinksPage/drinksPageSelectors';

const Paginator = ({ limit, totalItems }) => {
  /**
   * Відображає пагінацію, записує вибрану сторінку в стейт
   * @param {number} limit - кількість елементів на сторінку
   * @param {number} totalItems - загальна кількість елементів
   */

  const page = useSelector(selectPage);

  const [boundaryCount, setBoundaryCount] = useState(1);
  const [siblingCount, setSiblingCount] = useState(2);

  const dispatch = useDispatch();
  const screenSize = useMediaQuery('(min-width:768px)');
  const pageQuantity = Math.ceil(totalItems / limit);

  // Змінює кількість кнопок в залежності від екрану і кількості сторінок
  useEffect(() => {
    if (!screenSize && pageQuantity > 5) {
      setBoundaryCount(1);
      setSiblingCount(0);
      return;
    }
    if (screenSize && pageQuantity > 8) {
      setBoundaryCount(3);
      setSiblingCount(-2);
      return;
    }
    setBoundaryCount(1);
    setSiblingCount(2);
  }, [pageQuantity, screenSize]);

  const customStyles = {
    stack: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: screenSize ? '436px' : '320px',
      height: '55px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },

    pagination: {
      '.MuiPaginationItem-root': {
        marginLeft: '7px',
        marginRight: '7px',
        padding: '0',
        minWidth: '27px',
        height: '27px',
        fontSize: '12px',
        fontWeight: '500',
        color: `${colors.light}`,
        transition: 'background 250ms ease',
        '&:hover': {
          background: 'rgba(64, 112, 205, 0.4)',
        },
      },

      '.MuiPaginationItem-page.Mui-selected': {
        background: 'rgba(64, 112, 205, 0.5)',
      },

      'ul.MuiPagination-ul': {
        flexWrap: 'nowrap',

        '& > :first-of-type': {
          marginRight: '16px',
        },
        '& > :last-of-type': {
          marginLeft: '16px',
        },
      },
    },
  };

  return (
    <Stack sx={customStyles.stack}>
      {pageQuantity > 1 && (
        <Pagination
          count={pageQuantity}
          page={page}
          boundaryCount={boundaryCount}
          siblingCount={siblingCount}
          onChange={(_, value) => dispatch(setCurrentPage(value))}
          onClick={() => window.scrollTo({ top: 200, behavior: 'smooth' })}
          sx={customStyles.pagination}
        />
      )}
    </Stack>
  );
};

export default Paginator;
