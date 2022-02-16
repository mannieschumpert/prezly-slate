import * as React from 'react';

import styles from './Toolbox.module.scss';

export function Panel(props: React.PropsWithChildren<Record<string, unknown>>) {
    return <span className={styles.panel}>{props.children}</span>;
}