import React from 'react';

import useInput from '../../hooks/useInput';
import useRouter from '../../hooks/useRouter';
import SearchSummoner from '../../component/SearchSummoner';

import { Container, Logo } from './style';

const Main = () => {
  const { linkTo } = useRouter();
  const userName = useInput();

  return (
    <Container>
      <Logo
        src="https://attach.s.op.gg/logo/20200728145104.1d168565d106679d24e00fcd2affc8f4.png"
        alt="OP.GG Logo (베이가)"
      />
      <SearchSummoner
        width={'360px'}
        value={userName.value}
        onChange={userName.onChange}
        onSearch={(name) =>
          linkTo(`/summoner?userName=${name ? name : userName.value}`)
        }
      />
    </Container>
  );
};

export default Main;
