import React from 'react';

import useInput from '../../hooks/useInput';
import useRouter from '../../hooks/useRouter';

import SearchSummoner from '../../component/SearchSummoner';

import { HeaderContainer } from './style';

const Header = () => {
  const { linkTo } = useRouter();
  const userName = useInput();

  return (
    <HeaderContainer>
      <SearchSummoner
        value={userName.value}
        onChange={userName.onChange}
        onSearch={(name) =>
          linkTo(`/summoner?userName=${name ? name : userName.value}`)
        }
      />
    </HeaderContainer>
  );
};

export default Header;
