import dayjs from 'dayjs'
import React from 'react'
import { UserType } from '../../../services/usersService'
import {
  Avatar,
  Card,
  Divider,
  Header,
  Joined,
  Link,
  Location,
  Name,
  Stats,
  Updated,
  Url,
} from './styles'

interface IProps {
  user: UserType
}

const ProfileCard: React.FC<IProps> = ({ user }) => {
  return (
    <Card>
      <Header>
        <Avatar src={user.avatar_url} />
        <div>
          <Name>{user.name}</Name>
          {user.blog && (
            <Url href={user.blog} target="_blank">
              {user.blog}
            </Url>
          )}
        </div>
      </Header>
      <Divider />
      <Stats>
        <li>
          <span>Followers</span>
          <span>{user.followers}</span>
        </li>
        <li>
          <span>Following</span>
          <span>{user.following}</span>
        </li>
      </Stats>
      <Divider />
      <Joined>
        <p>Joined</p>
        <p>{dayjs(user.created_at).format(`MMM D, YYYY`)}</p>
      </Joined>
      <Location>
        <p>Location</p>
        <p>{user.location}</p>
      </Location>
      <Updated>
        Last Updated on {dayjs(user.updated_at).format(`MMM D, YYYY`)}
      </Updated>
      <Link href={user.html_url} target="_blank">
        ↗
      </Link>
    </Card>
  )
}

export default ProfileCard
