#!/bin/bash
RootFile="$HOME/Documents/cincintus/DevOps/Projectos-de-NODEJS/Task-Automation/example/example.txt"
RootCopy="$HOME/Documents/cincintus/DevOps/Projectos-de-NODEJS/Task-Automation/example/copy-example/example.txt"

cp "$RootFile" "$RootCopy"

echo "Backup completado"
