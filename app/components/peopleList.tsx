import { Form, NavLink } from "@remix-run/react";
import { Person } from "~/api/people";

type PeopleListProps = {
    people?: Person[];
    name?: string
};

export default function PeopleList({ people, name }: PeopleListProps) {
    return (
        <div id="list-container">
            <h3 className="text-3xl">{name ? name + ":" : ""}</h3>
            <ul id="list">
                {people?.[0] ?
                    people?.map((person) => (
                        <li>
                            <NavLink
                                id="listLink"
                                to={'/' + 'people/' + person._id}
                                prefetch="intent"
                            >
                                {person.name}
                            </NavLink>
                        </li>
                    )) :
                    <p>No {name}</p>
                }
            </ul>
        </div>
    );
}