import React from 'react';
import { IconDoor, IconBooks, IconSchool, IconBallpen } from '@tabler/icons';
import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core';

function IUserLink({ icon, color, label }) {
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
      })}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

const data = [
  { icon: <IconBooks size={16} />, color: 'violet', label: 'Przedmioty' },
  { icon: <IconDoor size={16} />, color: 'grape', label: 'Pomieszczenia' },
  { icon: <IconSchool size={16} />, color: 'red', label: 'Wydziały' },
  { icon: <IconBallpen size={16} />, color: 'blue', label: 'Zgłoszenia' },
];

export function IUserLinks() {
  const links = data.map((link) => <IUserLink {...link} key={link.label} />);
  return <div>{links}</div>;
}
