/** @jsx jsx */

import { Editor } from 'slate';

import { jsx } from '../../../jsx';

describe('nodes-hierarchy / Html', () => {
    it('should be kept after normalization', () => {
        const editor = (
            <editor>
                <h:html content="<div>hello</div>" />
            </editor>
        ) as unknown as Editor;

        const expected = (
            <editor>
                <h:html content="<div>hello</div>" />
            </editor>
        ) as unknown as Editor;

        Editor.normalize(editor, { force: true });

        expect(editor.children).toMatchSnapshot();
        expect(editor.children).toEqual(expected.children);
        expect(editor.selection).toEqual(expected.selection);
    });
});
