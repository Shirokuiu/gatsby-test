import * as React from 'react';
import { Link } from 'gatsby';

import PageLayout from '@components/shared/page-layout/page-layout';
import CenterLayout from '@components/shared/center-layout/center-layout';
import { useAppDispatch, useAppSelector } from '@hooks/index';
import { getTitle } from '@store/index-page-process/selectors';
import { clearState } from '@store/index-page-process/reducer/index-page-process';

function IndexPage() {
  const title = useAppSelector(getTitle);
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    dispatch(clearState());
  };

  return (
    <PageLayout renderFooter={() => <h2>Hello from footer content</h2>}>
      <CenterLayout>
        <ul>
          <li>
            <h1>Hello</h1>
          </li>
          <li>
            <Link to="test-page">Test page</Link>
          </li>
          <li>{title}</li>
          <li>
            <button type="button" onClick={handleButtonClick}>
              Reset state
            </button>
          </li>
        </ul>
      </CenterLayout>
    </PageLayout>
  );
}

export default IndexPage;
