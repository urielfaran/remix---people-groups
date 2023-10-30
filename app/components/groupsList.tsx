import { NavLink } from "@remix-run/react";
import { Group } from "~/api/groups";
import styles from '../tailwind.css';
import { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => {
    return [{ rel: 'stylesheet', href: styles }];
}

type GroupsListProps = {
    groups?: Group[];
    name: string
};
export default function GroupsList({ groups, name }: GroupsListProps) {
    return (
        <div id="list-container">
            <h3 className="text-3xl">{name}:</h3>
            <ul id="list">
                {groups?.[0] ?
                    groups?.map((group) => (
                        <li>
                            <NavLink
                                id="listLink"
                                to={'/' + 'groups/' + group._id}
                                prefetch="intent"
                            >
                                {group.name}
                            </NavLink>
                        </li>
                    )) :
                    <p>No {name}</p>
                }
            </ul>
        </div>
    );
}