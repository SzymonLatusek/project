import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from '@mantine/core';

import { IUser } from './IUser';
import { IUserLinks } from './IUserLinks';

import './IAppShell.scss';

export function IAppShell(props) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
          <Navbar height={600} p="xs" width={{ base: 300 }}>
            <Navbar.Section mt="xs">
                {/* <Brand /> */}
            </Navbar.Section>
            <Navbar.Section grow mt="md">
                <IUserLinks admin={props.admin} />
            </Navbar.Section>
            <Navbar.Section>
                <IUser />
            </Navbar.Section>
            </Navbar>
        </Navbar>
      }
      footer={
        <Footer height={60} p="md">
          Footer
        </Footer>
      }
      header={
        <Header height={70} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>Header</Text>
          </div>
        </Header>
      }
    >
      <Text>{props.contain}</Text>
    </AppShell>
  );
}

export default IAppShell;