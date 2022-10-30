import React from 'react';
import { useNavigate } from "react-router-dom";
import { IconDoor, IconBooks, IconSchool, IconBallpen } from '@tabler/icons';
import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core';

function IUserLink({ icon, color, label, href }) {
  const navigate = useNavigate();

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
      onClick={()=>{
        navigate(href)
      }}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="md" weight={600}>{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

const userData = [
  { icon: <IconBooks size={16} />, color: 'violet', label: 'Przedmioty', href: '/subjects' },
  { icon: <IconDoor size={16} />, color: 'grape', label: 'Pomieszczenia', href: '/rooms' },
  { icon: <IconSchool size={16} />, color: 'red', label: 'Wydziały', href: '/departments' },
  { icon: <IconBallpen size={16} />, color: 'blue', label: 'Zgłoszenia', href: '/assigment/request' },
];

const adminData = [
  { icon: <IconBooks size={16} />, color: 'violet', label: 'A', href: '/' },
  { icon: <IconDoor size={16} />, color: 'grape', label: 'B', href: '/' },
  { icon: <IconSchool size={16} />, color: 'red', label: 'C', href: '/' },
  { icon: <IconBallpen size={16} />, color: 'blue', label: 'D', href: '/' },
];

export function IUserLinks(props) {
  const userLinks = userData.map((link) => <IUserLink {...link} key={link.label} href={link.href}/>);
  const adminLinks = adminData.map((link) => <IUserLink {...link} key={link.label} href={link.href}/>);
  return <div>{props.admin === true ? adminLinks : userLinks}</div>;
}
