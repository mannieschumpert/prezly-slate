import * as React from 'react';

import { Input } from '#components';
import { Link } from '#icons';

export default {
    title: 'Components/Input',
    decorators: [
        (Story: React.ComponentType) => (
            <div
                style={{ background: 'rgba(27, 27, 54, 0.96)', padding: '150px 30px', width: 500 }}
            >
                <Story />
            </div>
        ),
    ],
};

export function Base() {
    const [value, setValue] = React.useState('');

    return <Input value={value} onChange={setValue} />;
}

export function WithIcon() {
    const [value, setValue] = React.useState('');

    return <Input value={value} onChange={setValue} icon={Link} />;
}

export function WithPlaceholder() {
    const [value, setValue] = React.useState('');

    return (
        <Input
            value={value}
            onChange={setValue}
            icon={Link}
            placeholder="Paste link or search content"
        />
    );
}

export function Disabled() {
    const [value, setValue] = React.useState('');

    return (
        <Input
            value={value}
            onChange={setValue}
            icon={Link}
            disabled
            placeholder="Paste link or search content"
        />
    );
}

export function Invalid() {
    const [value, setValue] = React.useState('NaN');

    return (
        <Input
            value={value}
            onChange={setValue}
            icon={Link}
            type="url"
            pattern="[0-9]+"
            placeholder="Only numbers"
        />
    );
}

export function WithButton() {
    const [value, setValue] = React.useState('');

    return (
        <Input
            value={value}
            onChange={setValue}
            placeholder="media.giphy.com/GIF"
            button={{ text: 'Add' }}
        />
    );
}

export function WithButtonAndIcon() {
    const [value, setValue] = React.useState('');

    return (
        <Input
            value={value}
            onChange={setValue}
            placeholder="media.giphy.com/GIF"
            icon={Link}
            button={{ text: 'Add' }}
        />
    );
}

export function WithButtonAndIconDisabled() {
    const [value, setValue] = React.useState('');

    return (
        <Input
            value={value}
            onChange={setValue}
            icon={Link}
            disabled
            placeholder="media.giphy.com/GIF"
            button={{ text: 'Add' }}
        />
    );
}

export function WithButtonAndIconInvalid() {
    const [value, setValue] = React.useState('NaN');

    return (
        <Input
            value={value}
            onChange={setValue}
            icon={Link}
            pattern="[0-9]+"
            placeholder="media.giphy.com/GIF"
            button={{ text: 'Add' }}
        />
    );
}

export function WithSuggestions() {
    const [value, setValue] = React.useState('');

    return (
        <Input value={value} onChange={setValue} withSuggestions>
            <ul
                style={{
                    margin: 0,
                    padding: '5px 5px 5px 30px',
                    border: '1px solid #eee',
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    background: 'white',
                }}
            >
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
                <li>Four</li>
                <li>Five</li>
            </ul>
        </Input>
    );
}

export function WithSuggestionsAbove() {
    const [value, setValue] = React.useState('');

    return (
        <Input value={value} onChange={setValue} withSuggestions="above">
            <ul
                style={{
                    margin: 0,
                    padding: '5px 5px 5px 30px',
                    border: '1px solid #eee',
                    position: 'absolute',
                    bottom: '100%',
                    left: 0,
                    right: 0,
                    background: 'white',
                }}
            >
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
                <li>Four</li>
                <li>Five</li>
            </ul>
        </Input>
    );
}
