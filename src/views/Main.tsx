import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import { Feed } from '../components';
import { StoresI } from '../stores';

const Main: React.FC<StoresI> = ({ account, feed }) => {
  useEffect(() => {
    feed.fetch();
  }, []);

  return <Feed onFeedEnd={feed.fetch.bind(feed)} loading={feed.loading} feed={feed.data} />;
};

export default inject('account', 'feed')(observer(Main));
