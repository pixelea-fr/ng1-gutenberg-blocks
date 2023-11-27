import { __ } from '@wordpress/i18n';
import { PanelBody, PanelRow, TextControl } from '@wordpress/components';
import { 
	useBlockProps, 
	InspectorControls, 
	PanelColorSettings,
	BlockControls,
	AlignmentControl,
} from '@wordpress/block-editor';

import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const { 
		shortcode,
		textColor,
		backgroundColor,
		align
	} = attributes;

	const onChangeShortcode = (newShortCode) => {
		setAttributes({ shortcode: newShortCode });
	};

	const onChangeAlign = (newAlign) => {
		setAttributes({ align: newAlign === undefined ? 'none' : newAlign });
	};

	const onChangeBackgroundColor = (newBackgroundColor) => {
		setAttributes({ backgroundColor: newBackgroundColor });
	};

	const onChangeTextColor = (newTextColor) => {
		setAttributes({ textColor: newTextColor });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody 
					title="Paramètres du shortcode"
					initialOpen={true}
				>
					<PanelRow>
						<fieldset>
							<TextControl
								label="Shortcode"
								value={shortcode}
								onChange={onChangeShortcode}
							
							/>
						</fieldset>
					</PanelRow>
				</PanelBody>

				<PanelColorSettings 
					title={__( 'Color settings', 'ka-example-block' )}
					initialOpen={false}
					colorSettings={[
						{
							value: textColor,
							onChange: onChangeTextColor,
							label: __( 'Text color', 'ka-example-block' ),
						},
						{
							value: backgroundColor,
							onChange: onChangeBackgroundColor,
							label: __( 'Background color', 'ka-example-block' ),
						},
					]}
				/>
			</InspectorControls>
			
			<BlockControls>
				<AlignmentControl
					value={align}
					onChange={onChangeAlign}
				/>
			</BlockControls>
		</>
	);
}
