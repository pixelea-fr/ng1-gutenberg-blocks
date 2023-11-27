import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<p { ...useBlockProps.save() }>
			{ 'Ng1 Gutenberg Block – hello from the saved content!' }
		</p>
	);
}
