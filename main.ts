import FS from "node:fs/promises"
import PATH from "node:path"

import "./globals"

export async function main() {
    const testDir = PATH.join(__dirname, "../tests")
    
    const filePaths = await getAllTestFiles(testDir)

    const results = await Promise.allSettled(filePaths.map((path) => import(path)))
    
    results.forEach(result => result.status === "rejected" && console.error(result.reason))

    printer.summary()
}

async function getAllTestFiles(path: string) {
    const filePaths: string[] = []

    const entities = await FS.readdir(path, { withFileTypes: true, recursive: true })

    for (let i = 0; i < entities.length; i++) {
        const dirent = entities[i]

        if (dirent.isFile() && dirent.name.endsWith(".test.js")) {
            filePaths.push(dirent.path + "/" + dirent.name.slice(0, -3))
        }   
    }

    return filePaths
}