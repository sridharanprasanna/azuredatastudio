/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { homedir } from 'os';
import { ExtHostVariableResolverProviderService } from 'vs/workbench/api/common/extHostVariableResolverService';

export class NodeExtHostVariableResolverProviderService extends ExtHostVariableResolverProviderService {
	protected override homeDir(): string | undefined {
		return homedir();
	}
}
