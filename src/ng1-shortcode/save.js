import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
  const { shortcode } = attributes;
  const blockProps = useBlockProps.save(); 
  return (
    <div { ...blockProps }>
      { shortcode }
    </div>
  );
}
