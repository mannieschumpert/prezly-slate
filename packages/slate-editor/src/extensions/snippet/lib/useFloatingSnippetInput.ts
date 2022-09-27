import { EditorCommands, useSavedSelection } from '@prezly/slate-commons';
import type { DocumentNode } from '@prezly/slate-types';
import { useState } from 'react';
import type { Editor } from 'slate';

import { EventsEditor } from '#modules/events';

interface State {
    isOpen: boolean;
}

interface Actions {
    close: () => void;
    open: () => void;
    rootClose: () => void;
    submit: (node: DocumentNode) => Promise<void>;
}

export function useFloatingSnippetInput(editor: Editor): [State, Actions] {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const savedSelection = useSavedSelection();

    function close() {
        savedSelection.restore(editor, { focus: true });
        setIsOpen(false);
    }

    function rootClose() {
        setIsOpen(false);
    }

    function open() {
        EventsEditor.dispatchEvent(editor, 'snippet-dialog-opened', {});
        setIsOpen(true);
        savedSelection.save(editor);
    }

    async function submit(node: DocumentNode) {
        EventsEditor.dispatchEvent(editor, 'snippet-dialog-submitted', {});

        close();

        try {
            EditorCommands.insertNodes(editor, node.children);
            savedSelection.restore(editor, { focus: true });
        } catch (error) {
            EventsEditor.dispatchEvent(editor, 'notification', {
                children: 'Cannot insert snippet.',
                type: 'error',
            });
        }
    }

    return [{ isOpen }, { close, open, rootClose, submit }];
}