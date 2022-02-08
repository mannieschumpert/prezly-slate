import * as React from 'react';

import type { ChooseGroupOption } from '#components';
import { Flex, VStack } from '#components';
import { Toolbox, Toggle, ChooseGroup, Button, Link } from '#components';
import { ExternalLink, Delete } from '#icons';

export default {
    title: 'Components/Toolbox',
};

export function Base() {
    const [cardLayout, setCardLayout] = React.useState<
        typeof cardLayoutOptions[number]['value'] | undefined
    >('vertical');

    const cardLayoutOptions: ChooseGroupOption<'vertical' | 'horizontal'>[] = [
        {
            value: 'vertical',
            label: 'Vertical',
            Icon: (props) => (
                <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect width="48" height="48" rx="4" fill="white" fillOpacity="0.12" />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M40 27H8V9H40V27Z"
                        fill={props.isActive ? '#F9CA7B' : 'white'}
                    />
                    <path
                        opacity="0.4"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M40 39H8V31H40V39Z"
                        fill="white"
                    />
                </svg>
            ),
        },
        {
            value: 'horizontal',
            label: 'Horizontal',
            Icon: (props) => (
                <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect width="48" height="48" rx="4" fill="white" fillOpacity="0.12" />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19 37H6V11H19V37Z"
                        fill={props.isActive ? '#F9CA7B' : 'white'}
                    />
                    <path
                        opacity="0.4"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M42 37H22V11H42V37Z"
                        fill="white"
                    />
                </svg>
            ),
        },
    ];

    return (
        <div style={{ width: 280 }}>
            <Toolbox.Panel>
                <Toolbox.Header withCloseButton>Web bookmark settings</Toolbox.Header>

                <Toolbox.Section>
                    <Flex justifyContent="center">
                        <Link href="#" icon={ExternalLink}>
                            View
                        </Link>
                    </Flex>
                </Toolbox.Section>

                <Toolbox.Section caption="Preview image">
                    <Toggle>Show preview image</Toggle>
                </Toolbox.Section>

                <Toolbox.Section caption="Card layout">
                    <VStack spacing="m" flexGrow={1}>
                        <ChooseGroup
                            name="card-layout"
                            type="radio"
                            options={cardLayoutOptions}
                            selected={cardLayout}
                            onChange={setCardLayout}
                            columns={3}
                        />
                        <Toggle>Open in new tab</Toggle>
                    </VStack>
                </Toolbox.Section>

                <Toolbox.Footer>
                    <Flex
                        as={Button}
                        variant="clear"
                        Icon={Delete}
                        fullWidth
                        p="m"
                        display="inline-block"
                    >
                        Remove web bookmark
                    </Flex>
                </Toolbox.Footer>
            </Toolbox.Panel>
        </div>
    );
}
